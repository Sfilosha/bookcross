export function handleThumbnailURL(item: any) {
  let thumbnail = item.volumeInfo.imageLinks?.thumbnail || '';
  if (thumbnail.startsWith('http:')) {
    thumbnail = thumbnail.replace('http:', 'https:');
  }
  return thumbnail;
}
