import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_EVENT = gql`
  mutation addLesson($date: Date, $courseId: ID) {
    addLesson(date: $date, courseId: $courseId) {
      _id
      name
      lessons {
        _id
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation removeLesson($lessonId: ID, $courseId: ID) {
    removeLesson(lessonId: $lessonId, courseId: $courseId) {
      _id
      name
      lessons {
        _id
        date
      }
    }
  }
`;

const CourseButton = ({date, courseId, lessons}) => {
  const [addLesson] = useMutation(ADD_EVENT, {
    refetchQueries: ['getCourses'],
  });
  const [removeLesson] = useMutation(REMOVE_EVENT, {
    refetchQueries: ['getCourses'],
  });

  const foundDate = lessons.find((lesson) => {
    const lessonDate = new Date(lesson.date);
    return lessonDate.getDate() === date.getDate();
  });

  return (
    <span>
      {date.getMonth() + 1}/{date.getDate()}
      {foundDate ? (
        <button
          onClick={() =>
            removeLesson({
              variables: {
                courseId,
                lessonId: foundDate._id,
              },
            })
          }
        >
          X
        </button>
      ) : (
        <button
          onClick={() =>
            addLesson({
              variables: {
                courseId,
                date,
              },
            })
          }
        >
          O
        </button>
      )}
      <style jsx>
        {`
          span {
            display: flex;
            flex-direction: column;
          }
          span + span {
            margin-left: 10px;
          }
          button {
            margin-top: 1rem;
            border: none;
          }
        `}
      </style>
    </span>
  );
};

export default CourseButton;
