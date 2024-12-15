import React, { useEffect, useState, useCallback } from 'react';
import { findFeedbacks } from '@site/src/firebase/store/feedback';
import { Feedback } from '@site/src/types/Feedback';
import Link from '@docusaurus/Link';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 2;

  const fetchFeedbacks = useCallback(async () => {
    setLoading(true);
    console.log(
      `id : ${feedbacks.length ? feedbacks[feedbacks.length - 1].id : undefined}`
    );
    const newFeedbacks = await findFeedbacks(
      pageSize,
      feedbacks.length ? feedbacks[feedbacks.length - 1].id : undefined
    );
    console.log(newFeedbacks);
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, ...newFeedbacks]);
    setLoading(false);
    setHasMore(newFeedbacks.length === pageSize);
  }, [feedbacks]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleShowMore = () => {
    fetchFeedbacks();
  };

  return (
    <div>
      <ul>
        {feedbacks.map((feedback, index) => {
          const createdAtSeconds = feedback.createdAt.seconds;
          const createdAtDate = new Date(createdAtSeconds * 1000);
          const formattedDate = createdAtDate.toLocaleDateString('en-CA');

          return (
            <li
              key={index}
              style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{feedback.name}</p>
                <p style={{ margin: 0, color: '#555' }}>{formattedDate}</p>
              </div>
              <p style={{ marginTop: '10px' }}>{feedback.content}</p>
            </li>
          );
        })}
      </ul>
      {hasMore && (
          <div style={{ textAlign: 'right' }}>
            <Link
                className="button button--primary button--md"
                onClick={handleShowMore}
            >
              {loading ? 'Loading...' : 'Show More'}
            </Link>
          </div>
      )}
    </div>
  );
};

export default FeedbackList;
