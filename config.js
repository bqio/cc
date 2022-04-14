module.exports = {
  glossary: [
    ["{SERGE_N}", "Серж"],
    ["{KID_N}", "Кид"],
    ["{MARGE_N}", "Мардж"],
    ["{LEENA_N}", "Лина"],
    ["{LYNX_N}", "Линкс"],
    ["{KIKI_N}", "Кики"],
    ["{LOLO_N}", "Лоло"],
    ["{LEENA_I}", "Линой"],
    ["{L_ARNY_N}", "Деревня Арни"],
    ["{L_HYDRA_N}", "Болота Гидры"],
    ["{L_CAPE_HOWL_N}", "Ревущий Мыс"],
    ["{L_LIZARD_ROCK_N}", "Скала Ящерицы"],
    ["{L_DIVINE_DRAGON_FALLS_N}", "Водопад Божественного Дракона"],
    ["{L_FOSSIL_VALLEY_N}", "Долина Окаменелости"],
    ["{L_ARNY_D}", "Деревне Арни"],
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
