function ResumeParagraphDetail({ resume }: { resume: string }) {
  return <p className="whitespace-pre-wrap">{resume ? resume : "-"} </p>;
}

export default ResumeParagraphDetail;
