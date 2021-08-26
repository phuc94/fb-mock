import ContentLoader from 'react-content-loader'

export const FriendTabLoading = (props) => (
    <ContentLoader 
      speed={1.5}
      width={190}
      height={345}
      viewBox="0 0 190 345"
      backgroundColor="#525266"
      foregroundColor="#a0a2ac"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="190" height="190" />
      <rect x="8" y="200" rx="6" ry="6" width="174" height="25" />
      <rect x="8" y="240" rx="6" ry="6" width="174" height="30" />
      <rect x="8" y="280" rx="6" ry="6" width="174" height="30" />
    </ContentLoader>
);