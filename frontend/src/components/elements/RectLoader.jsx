import ContentLoader from "react-content-loader";

export default function ({
  width,
  height,
  className,
  backgroundColor,
  foregroundColor,
}) {
  return (
    <ContentLoader
      width={width}
      height={height}
      speed={1.5}
      backgroundColor={backgroundColor || "rgba(0,0,0,0.15)"}
      foregroundColor={foregroundColor || "rgba(0,0,0,0.5)"}
      className={className}
    >
      <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
  );
}
