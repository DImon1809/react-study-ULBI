import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({
  searchQuery,
  setSearchQuery,
  selectedSort,
  onChangeHandler,
}) {
  return (
    <div>
      <MyInput
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Поиск..."
      />
      <MySelect
        value={selectedSort}
        onChangeHandler={onChangeHandler}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}
