/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CategoryCard from "components/cards/CategoryCard";
import useApi from "hooks/useApi";
import Header from "components/common/Header";
import { getPostsCategory } from "services/postService";
import LoadingAnimation from "components/common/LoadingAnimation";
import NoResults from "components/common/NoResults";
import Head from "components/common/Head";

const BlogCategory = () => {
  const { name } = useParams();

  const {
    data: { posts },
    loading,
    request,
  } = useApi(getPostsCategory);

  useEffect(() => {
    request(name);
  }, [name]);

  return (
    <section className="blog-category-section">
      <Head title="Izon Voice | Category" />
      <LoadingAnimation loading={loading} />

      <Header />

      <div className="container">
        <div>
          <div className="top-contain">
            <h2 className="category">
              <i className="fa fa-globe"></i> {name}
            </h2>
          </div>

          <div className="category-wrapper">
            {posts && posts.length > 0 ? (
              posts.map((post, i) => <CategoryCard data={post} key={i} />)
            ) : (
              <>
                <NoResults />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
