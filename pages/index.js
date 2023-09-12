import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Container,
  Box,
  TextField,
  Button,
  FormControl,
  Paper,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";

import { Send } from "@mui/icons-material";
import { AddPost, PostProvider, PostsList } from "../components";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <PostProvider>
      <div>
        <Head>
          <title>Social Emoji 🐧</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {isDesktop ? (
          <div className={styles.desktopMessage}>
            <Typography variant="h3" align="center">
              Désolé, cette application est destinée aux appareils mobiles.
            </Typography>
          </div>
        ) : (
          <Stack sx={{ padding: "2rem 1rem" }} gap={3}>
            <Typography
              variant="h1"
              align="center"
              sx={{ fontSize: "3rem", paddingBottom: "1rem" }}
            >
              Social Emoji 🐧
            </Typography>
            <AddPost />
            <PostsList />
          </Stack>
        )}
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
        <style jsx>{`
          /* Style pour le message desktop */
          .desktopMessage {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
          }
        `}</style>
      </div>
    </PostProvider>
  );
}
