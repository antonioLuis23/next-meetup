import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Primeiro encontro",
    image:
      "https://www.tratabrasil.org.br/blog/wp-content/uploads/2020/08/teresina.jpg",
    address: "Endereço 5, 14545 Teresina",
    description: "O nosso primeiro encontro",
  },
  {
    id: "m2",
    title: "Segundo encontro",
    image:
      "https://www.tratabrasil.org.br/blog/wp-content/uploads/2020/12/belo-horizonte-lideranca-climatica-1103.jpg",
    address: "Endereço 10, 14545 Belo Horizonte",
    description: "O nosso segundo encontro",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
