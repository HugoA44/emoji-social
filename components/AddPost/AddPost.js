import { Send } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { usePostContext } from "../PostContext";
import { useState } from "react";

export const AddPost = () => {
  const { createPost } = usePostContext();
  const [formData, setFormData] = useState({
    username: "",
    text: "",
  });

  return (
    <Paper
      sx={{ padding: 3 }}
      variant="outlined"
      component="form"
      onSubmit={async (event) => {
        if (!formData.username || !formData.text) {
          alert("Veuillez remplir tous les champs");
          event.preventDefault();
          return;
        }
        event.preventDefault();
        await createPost(formData.username, formData.text);
        setFormData({ username: "", text: "" });
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "2rem", mb: 3 }}>
        Nouvelle publication
      </Typography>
      <FormControl
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TextField
          type="text"
          label="Pseudo"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <TextField
          type="text"
          label="Émoji"
          value={formData.text}
          onChange={(event) =>
            setFormData({ ...formData, text: event.target.value })
          }
        />
        <Button variant="contained" endIcon={<Send />} type="submit">
          Envoyer
        </Button>
      </FormControl>
    </Paper>
  );
};
