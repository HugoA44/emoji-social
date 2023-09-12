import { Send } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { usePostContext } from "../PostContext";

export const PostsList = () => {
  const { posts } = usePostContext();
  return (
    <Stack gap={3}>
      {posts.map((post) => (
        <Paper variant="outlined" sx={{ padding: 3 }}>
          <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
            @{post.username}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "2rem" }}>
            {post.text}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
};
