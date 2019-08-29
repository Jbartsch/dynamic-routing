import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  const { id, foo } = router.query;
  return (
    <div>
      <div>ID {id}</div>
      <div>FOO {foo}</div>
    </div>
  );
}

export default Home;
