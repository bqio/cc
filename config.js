module.exports = {
  glossary: [
    ["{SERGE_N}", "Серж"],
    ["{KID_N}", "Кид"],
    ["{MARGE_N}", "Мардж"],
    ["{LEENA_N}", "Лина"],
    ["{LYNX_N}", "Линкс"],
    ["{LEENA_I}", "Линой"],
    ["{L_ARNY_N}", "Деревня Арни"],
    ["{L_ARNY_D}", "Деревне Арни"],
    ["{L_HYDRA_N}", "Болота Гидры"],
    ["{KIKI_N}", "Кики"],
    ["{LOLO_N}", "Лоло"],
  ],
  entries: [
    {
      path: "lang/en.csv",
      enc: "utf-8",
    },
    {
      path: "lang/sysmes.txt",
      enc: "utf16le",
    },
  ],
  patches: [
    {
      entry: "opening.bin",
      dist: "cdrom2/map/mapbin/",
    },
    {
      entry: "large_font_gn_70.spritefont",
      dist: "font",
    },
  ],
};
