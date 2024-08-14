import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  return (
    <div>
      <h1>this is academic semester component</h1>
    </div>
  );
};

export default AcademicSemester;
