export const getColorsByHex = (color) => {
  const colors = {
    синий: "#0000FF",
    красный: "#FF0000",
    белый: "#FFFFFF",
    серый: "#808080",
    черный: "#000000",
    желтый: "#FFFF00",
    бежевый: "#F5F5DC",
    хаки: "#F0E68C",
    графит: "#36454F",
  };

  return colors[color.trim()] || null;
};
