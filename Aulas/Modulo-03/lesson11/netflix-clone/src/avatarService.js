// avatarService.js
import { db } from './firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export const addAvatarToUser = async (uid, avatar) => {
    const userDoc = doc(db, 'user', uid);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
        const userAvatars = userSnap.data().avatars || [];
        await updateDoc(userDoc, {
            avatars: [...userAvatars, avatar]
        });
    } else {
        console.error("User not found");
    }
};

export const fetchUserAvatars = async (uid) => {
    const userDoc = doc(db, 'user', uid);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
        return userSnap.data().avatars || [];
    } else {
        console.error("User not found");
        return [];
    }
};
