// import {useMutation} from '@apollo/react-hooks';
// import gql from 'graphql-tag';
// import {useForm} from 'react-hook-form';

// // const ADD_SYLLABUS = gql`
// //   mutation addHabit($syllabus: SyllabusInput) {
// //     addSyllabus(syllabus: $syllabus) {
// //       _id
// //       name
// //     }
// //   }
// // `;

// const SyllabusForm = () => {
//   const {register, handleSubmit, watch, errors} = useForm();
//   const onSubmit = (data) => console.log(data);

//   // console.log(watch('example'));

//   // const [addSyllabus] = useMutation(ADD_SYLLABUS, {
//   //   refetchQueries: ['getSyllabuses'],
//   // });

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="name" name="name" ref={register({required: true})} />
//       {errors.name && 'Syllabus name is required'}
//       <textarea name="description" ref={register} />
//       <input type="url" placeholder="course" name="course" ref={register({required: true})} />
//       {errors.url && 'course url is required'}
//       <input type="submit" />
//     </form>

//     // <Form
//     //   onSubmit={(data) => {
//     //     addSyllabus({
//     //       variables: {
//     //         syllabus: {
//     //           name: data.syllabus,
//     //         },
//     //       },
//     //     });
//     //   }}
//     // >
//     //   <Field>Habit</Field>
//     // </Form>
//   );
// };

// export default SyllabusForm;
