import Link from "next/link";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export default function Home() {
  // 下面是 skills.map(...) 的等价写法,用 for 和 forEach 分别实现,仅作对比学习,不会被执行

  // for 版本:手动建一个空数组,循环里 push 进去,最后把数组交给 JSX
  // const skillItems = [];
  // for (let i = 0; i < skills.length; i++) {
  //   skillItems.push(<span key={skills[i]}>{skills[i]}</span>);
  // }
  // 之后在 JSX 里用 {skillItems} 渲染

  // forEach 版本:forEach 本身不返回数组,所以必须自己手动 push 到外部数组里
  // const skillItems2: React.ReactNode[] = [];
  // skills.forEach((skill) => {
  //   skillItems2.push(<span key={skill}>{skill}</span>);
  // });
  // 之后在 JSX 里用 {skillItems2} 渲染

  return (
  <div>
    <h1> {profile.name} </h1>
    <h2> {profile.title} </h2>
    <h3> {profile.tagline} </h3>
    <div> {skills.map((skill) => (
      <span key={skill}> {skill} </span>
      ))}
    </div>
    <Link href="/about"> About </Link>
    <Link href="/internship"> Internship </Link>
    <Link href="/projects"> Projects </Link>
  </div>
  );
}