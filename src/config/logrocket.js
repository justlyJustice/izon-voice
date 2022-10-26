import LogRocket from "logrocket";

export default function logrocketConfig() {
  process.env.NODE_ENV === "production" && LogRocket.init("pbnfxi/izon-voice");
}
