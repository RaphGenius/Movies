function ResumeParagraphDetail({ resume }: { resume: string }) {
  return <p className="whitespace-pre-wrap">{resume ? resume : "NC"} </p>;
}

export default ResumeParagraphDetail;
