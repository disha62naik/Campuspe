/**
 * Renders the real image when `src` is set, otherwise a dashed placeholder.
 * Size it with `className` (or `style`) – the placeholder keeps the layout intact.
 */
export default function ImageSlot({ src, alt = "", label, className = "", style }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`img-filled ${className}`} style={style} draggable={false} />;
  }
  return (
    <div className={`img-slot ${className}`} style={style} role="img" aria-label={alt || label || "image placeholder"}>
      <span>{label || alt}</span>
    </div>
  );
}
