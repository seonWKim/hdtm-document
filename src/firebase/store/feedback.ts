// src/firebase/store/feedback.ts
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '@site/src/firebase/config';
import { Feedback } from '@site/src/types/Feedback';

const guestFeedbackCollection = collection(db, '/guest-feedback');

export const saveFeedback = async (
  name: string,
  email: string,
  content: string
) => {
  try {
    const docRef = await addDoc(guestFeedbackCollection, {
      name,
      email,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (e) {
    console.error('Error adding feedback: ', e);
  }
};

export const findFeedbacks = async () => {
  const feedbacksQuery = query(
    guestFeedbackCollection,
    orderBy('createdAt', 'desc'),
    limit(10)
  );

  try {
    const querySnapshot = await getDocs(feedbacksQuery);
    const feedbacks: Feedback[] = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Feedback;
      return {
        ...data,
      };
    });

    return feedbacks;
  } catch (e) {
    console.error('Error fetching feedbacks: ', e);
    return [];
  }
};
