import {AsyncStorage} from 'react-native'
import {Notifications} from 'expo'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

const asyncStorageKey = "udacityStorageKey"
const notficationKey = "flashcards:notifcation"

export async function getDecks(){
    let getValueJson = await AsyncStorage.getItem(asyncStorageKey, (err, result) => {
        return result
    })
    let Objects = JSON.parse(getValueJson)
    let values = Object.values(Objects)
    return values
}

export async function getDeck(key){
    let objectJson = await AsyncStorage.getItem(`${asyncStorageKey}`, (err, result) => {
        return result
    })
    let value = JSON.parse(objectJson)[key]
    return value
}

export function saveDeckTitle({key ,title}){
    AsyncStorage.mergeItem(`${asyncStorageKey}`, JSON.stringify(
        {
            [key]: {
                key,
                title,
                questions: []
            },
        }
    ))
}

export async function addCardToDeck(key, card){
    let objectsJson = await AsyncStorage.getItem(`${asyncStorageKey}`)
    let objects = JSON.parse(objectsJson)
    objects[key].questions = [...objects[key].questions, card]
    AsyncStorage.setItem(`${asyncStorageKey}`, JSON.stringify(objects))
}

export async function clear() {
    await AsyncStorage.clear()
    console.log('done')
    let keys = await AsyncStorage.getAllKeys()
    console.log(keys)
}

export function clearLocalNotification(){
    return AsyncStorage.removeItem(notficationKey)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification(){
    return {
        title: 'Flash Cards',
        body: "You haven't study yet",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification(){
    AsyncStorage.getItem(notficationKey)
    .then(JSON.parse)
    .then(data => {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                if(Constants.isDevice && status === 'granted'){
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)
                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )
                    AsyncStorage.setItem(notficationKey, JSON.stringify(true))
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    })
}