import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.tratabrasil.org.br/blog/wp-content/uploads/2020/08/teresina.jpg"
      title="O Primeiro Encontro"
      address="Endereço 5, 14545 Teresina"
      description="O nosso primeiro encontro"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log("meetupId");

  return {
    props: {
      meetupData: {
        image:
          "https://www.tratabrasil.org.br/blog/wp-content/uploads/2020/08/teresina.jpg",
        id: meetupId,
        title: "O Primeiro Encontro",
        address: "Endereço 5, 14545 Teresina",
        description: "O nosso primeiro encontro",
      },
    },
  };
};

export default MeetupDetails;
