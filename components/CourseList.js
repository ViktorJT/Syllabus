import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Course from './Course';

const GET_COURSES = gql`
  query getCourses {
    courses {
      _id
      name
      lessons {
        _id
        date
      }
    }
  }
`;

const CourseList = () => {
  const {data, loading, error} = useQuery(GET_COURSES);
  if (loading) return <section />;
  if (error) {
    console.log(error);
    return <section />;
  }
  const {courses} = data;

  return (
    <section>
      <h2>Lessons:</h2>
      {courses.map((course, index) => (
        <Course key={course._id} course={course} index={index} />
      ))}
    </section>
  );
};

export default CourseList;
