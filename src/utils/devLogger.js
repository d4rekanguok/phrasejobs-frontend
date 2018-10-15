export default function devLogger (data) {
  if (process.env.NODE_ENV !== 'production') console.log(data);
  return data;
}