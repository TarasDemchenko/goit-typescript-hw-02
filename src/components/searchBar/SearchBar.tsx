import { Field, Form, Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import s from "./SearchBar.module.css";
import { FC } from "react";

interface SearchProps {
setQuery: (query: string) => void
}
const SearchBar:FC<SearchProps> = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    setQuery(values.query);
  };
  return (
    <div className={s.search}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        className={s.search}
      >
        <Form className={s.search_form}>
          <Field
            name="query"
            className={s.search_input}
            placeholder="Search images and photos"
          />
          <button type="submit" className={s.search_btn}>
            <CiSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
