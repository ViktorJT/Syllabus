import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {withApollo} from '../lib/apollo';
import Layout from '../components/Layout';
import CourseList from '../components/CourseList';
import CourseForm from '../components/CourseForm';

const Home = () => {
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Course Title</h1>
        <div className="list">
          <CourseForm />
          <CourseList />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
