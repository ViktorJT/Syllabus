import {Form, Field} from '@leveluptuts/fresh';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_COURSE = gql`
  mutation addCourse($course: CourseInput) {
    addCourse(course: $course) {
      _id
      name
    }
  }
`;

const CourseForm = () => {
  const [addCourse] = useMutation(ADD_COURSE, {
    refetchQueries: ['getCourses'],
  });

  return (
    <Form
      onSubmit={(data) => {
        addCourse({
          variables: {
            course: {
              name: data.course,
            },
          },
        });
      }}
    >
      <Field>Course</Field>
    </Form>
  );
};

export default CourseForm;
