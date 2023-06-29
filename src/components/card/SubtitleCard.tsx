type Props = {
  subtitle: string;
};
export default function SubtitleCard({ subtitle }: Props) {
  return (
    <p className="text-gray-600 dark:text-gray-300 ">{subtitle ?? "NC"}</p>
  );
}
