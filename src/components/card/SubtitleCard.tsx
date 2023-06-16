type Props = {
  subtitle: string;
};
export default function SubtitleCard({ subtitle }: Props) {
  return <p>{subtitle ?? "NC"}</p>;
}
