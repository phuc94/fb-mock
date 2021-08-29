import ContentLoader from 'react-content-loader'

export const FriendTabLoading = (props) => (
    <ContentLoader 
      speed={1.5}
      width={190}
      height={380}
      viewBox="0 0 190 380"
      backgroundColor="#525266"
      foregroundColor="#a0a2ac"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="190" height="240" />
      <rect x="8" y="255" rx="6" ry="6" width="174" height="15" />
      <rect x="8" y="287" rx="6" ry="6" width="174" height="35" />
      <rect x="8" y="335" rx="6" ry="6" width="174" height="35" />
    </ContentLoader>
);