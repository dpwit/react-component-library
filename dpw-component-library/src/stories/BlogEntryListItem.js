import React from "react";

export const BlogEntryListItem = (props) => {
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <NoColorLink to={props.slug}>
      <BlogListItemWrapper>
        <Description>
          <Title>{props.title}</Title>
          <span>
            Published: {props.date}
            <br />
            Last Updated: {props.lastUpdatedAt}
          </span>
          <Excerpt>{props.excerpt}</Excerpt>
        </Description>
      </BlogListItemWrapper>
    </NoColorLink>
  );
};