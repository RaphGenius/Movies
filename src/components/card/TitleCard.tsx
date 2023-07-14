export default function TitleCard({ title }: { title: string }) {
  return (
    <h3 className="font-bold text-md line-clamp-2 break-words  ">{title}</h3>
  );
}
