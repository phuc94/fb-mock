import ContentLoader from 'react-content-loader'

export const PostLoading = (props) => (
    <ContentLoader 
      speed={1.5}
      width={630}
      height={550}
      viewBox="0 0 630 550"
      backgroundColor="#525266"
      foregroundColor="#a0a2ac"
      {...props}
    >
      <rect x="48" y="8" rx="3" ry="3" width="180" height="6" /> 
      <rect x="48" y="26" rx="3" ry="3" width="120" height="6" /> 
      <rect x="10" y="56" rx="3" ry="3" width="620" height="6" /> 
      <rect x="10" y="72" rx="3" ry="3" width="620" height="6" /> 
      <rect x="10" y="88" rx="3" ry="3" width="260" height="6" /> 
      <rect x="0" y="110" rx="3" ry="3" width="630" height="400" /> 
      <circle cx="25" cy="25" r="20" />
    </ContentLoader>
);

export const StoryLoading = (props) => (
    <ContentLoader 
      speed={1.5}
      width={630}
      height={220}
      viewBox="0 0 630 220"
      backgroundColor="#525266"
      foregroundColor="#a0a2ac"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="98" height="192" /> 
      <rect x="106" y="0" rx="10" ry="10" width="98" height="192" /> 
      <rect x="212" y="0" rx="10" ry="10" width="98" height="192" /> 
      <rect x="318" y="0" rx="10" ry="10" width="98" height="192" /> 
      <rect x="424" y="0" rx="10" ry="10" width="98" height="192" /> 
      <rect x="530" y="0" rx="10" ry="10" width="98" height="192" /> 
    </ContentLoader>
);

export const ContactLoading = (props) => (
    <ContentLoader 
      speed={1.5}
      width={247}
      height={56}
      viewBox="0 0 247 56"
      backgroundColor="#525266"
      foregroundColor="#a0a2ac"
      {...props}
    >
      <circle cx="32" cy="28" r="20" />
      <rect x="60" y="15" rx="6" ry="6" width="180" height="30" /> 
    </ContentLoader>
);

export const CommentLoading = (props) => (
  <div>
    <ContentLoader
      speed={1.5}
      width={606}
      height={57}
      viewBox="0 0 606 57"
      backgroundColor="#525266"
      foregroundColor="#a0a2ac"
      {...props}
    >
      <circle cx="17.5" cy="17.5" r="17.5" />
      <rect x="42" y="0" rx="15" ry="15" width="550" height="57" />
    </ContentLoader>
  </div>
);

export const ContactsLoading = ()=> {
    return (
        <>
            <ContactLoading />
            <ContactLoading />
            <ContactLoading />
            <ContactLoading />
            <ContactLoading />
            <ContactLoading />
            <ContactLoading />
            <ContactLoading />
        </>
    )
};


export const MainColumnLoading = () => {
    return(
        <div className="mt-[20px] max-w-[630px] mx-auto">
            <StoryLoading />
            <PostLoading />
            <PostLoading />
            <PostLoading />
            <PostLoading />
        </div>
    )
}