function ResumeParagraphDetail({ resume }: { resume: string }) {
  return <p>{resume ? resume : "NC"} </p>;
}

export default ResumeParagraphDetail;
