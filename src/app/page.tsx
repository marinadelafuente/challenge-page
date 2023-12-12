"use client";
import { Link } from "@chakra-ui/next-js";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { CardList } from "./cardList";
// import { LogInModal } from "./modal";
import Nav from "./nav";
import { redirect, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     let username = localStorage.getItem("savedUsername");
  //     setSavedUsername(username);

  //     // let jobTitle = localStorage.getItem("savedJobTitle");
  //     // setSavedJobTitle(jobTitle);
  //   }
  // }, []);

  // const [savedUsername, setSavedUsername] = useState<string | null>(null);
  let savedUsername = typeof window !== "undefined" && window.localStorage ? localStorage.getItem("savedUsername") : null;
  // const [savedJobTitle, setSavedJobTitle] = useState<string | null>(null);
  // const user = { ...{ savedUsername, savedJobTitle } };

  if (!savedUsername) {
    router.push("/login");
  } else {
    router.push("/information-page");
  }

  return (
    <>
      {/* <div>
        <CardList isLoggedIn={true} />
      </div> */}
      {/* <main> */}

      {/* <InfoPage {...{ isLoggedIn }} /> */}
      {/* <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}> */}

      {/* <LogInModal isShown={true} /> */}
      {/* {username && jobTitle ? <CardList /> : <LogInModal isShown={true} />} */}
      {/* </Link>
      <Link href="/login">
        <LogInModal isShown={true} />
      </Link> */}
      {/* <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link> */}
      {/* </main> */}
    </>
  );
}

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
//             By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
//       </div>

//       <div className={styles.grid}>
//         <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
//         </a>
//       </div>
//     </main>
//   );
// }

// export default function Page() {
//   return <h1>Hello, Next.js!</h1>;
// }
