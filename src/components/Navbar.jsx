import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch } from "react-redux";
import { wordsSearch } from "../store/words";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Kumbh Sans",
  },
  textField: {
    width: 100,
  },
}));

export default function Navbar({ searchText, setSearchText }) {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#4f053b" }}>
          {!show ? (
            <Typography variant="h6" className={classes.title}>
              Vocabs
            </Typography>
          ) : (
            ""
          )}
          {!show ? <SearchIcon onClick={() => setShow(!show)} /> : ""}
          {show ? (
            <>
              <input
                autoFocus
                type="text"
                style={{
                  color: "white",
                  backgroundColor: "#4f053b",
                  border: "none",
                }}
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  dispatch(wordsSearch(e.target.value));
                }}
              />
              {
                <ClearIcon
                  style={{ position: "absolute", right: "25px" }}
                  onClick={() => {
                    setShow(!show);
                    setSearchText("");
                    dispatch(wordsSearch(""));
                  }}
                />
              }
            </>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
