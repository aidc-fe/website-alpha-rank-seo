export default function SuccessStoryList() {
  return (
    <ul className="flex gap-4">
      {STORY_LIST.map((item) => {
        const { name, desc, avatar } = item;
        return <li key={name}></li>;
      })}
    </ul>
  );
}

const STORY_LIST = [
  {
    avatar: "",
    name: "eStoreKings",
    desc: "",
  },
  {
    avatar: "",
    name: "eStoreKings",
    desc: "",
  },
  {
    avatar: "",
    name: "eStoreKings",
    desc: "",
  },
  {
    avatar: "",
    name: "eStoreKings",
    desc: "",
  },
  {
    avatar: "",
    name: "eStoreKings",
    desc: "",
  },
];
