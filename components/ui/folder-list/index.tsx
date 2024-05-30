// import { AuditType } from "@/pages/api/pageSpeedInsight";
// import { Tag } from "antd";
// import { getColor } from "../../chart/gauge";
// import styles from "./index.module.css";
// import { cn } from "@/utils/cn";

// export default function ScrollList(props: { data: AuditType[] }) {
//   const { data } = props;
//   return (
//     <div
//       className={cn(
//         "mt-8 mb-6 flex-col h-screen overflow-auto sticky",
//         styles.list
//       )}
//     >
//       {data.map((item) => {
//         return (
//           <div
//             className={cn(
//               "mt-3 relative cursor-pointer bg-white/30 rounded-xl p-4",
//               styles.card
//             )}
//             key={item.id}
//           >
//             <div
//               className={cn(
//                 "absolute z-10 top-0 left-0 w-full h-full rounded-xl opacity-0",
//                 styles.overlay
//               )}
//             />

//             <a
//               target="_blank"
//               href="https://apps.shopify.com/alpharank-1?locale=zh-CN"
//               className={cn(
//                 "w-fit px-4 opacity-0 font-semibold top-1/2 left-1/2 z-20 absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[20px]",
//                 styles.cardBtn
//               )}
//             >
//               <svg
//                 className={styles.icon}
//                 height="24"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 0h24v24H0z" fill="none"></path>
//                 <path
//                   d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//               Optimize For Me
//             </a>

//             {/* <div
//               className={
//                 "absolute bg-white h-full w-full z-10 opacity-0 duration-200 hover:opacity-100"
//               }
//             >
//               <Button
//                 target="_blank"
//                 type={"link"}
//                 href="https://apps.shopify.com/alpharank-1?locale=zh-CN"
//               >
//                 Optimize For Me
//               </Button>
//             </div> */}
//             <div className={"flex"}>
//               <strong className={"flex items-center"}>
//                 <Tag color={getColor(item.score * 100)}>{item.score}</Tag>
//                 <span>{item.title}</span>
//               </strong>
//             </div>
//             {item.displayValue ? (
//               <Tag className={"mt-2"}>{item.displayValue}</Tag>
//             ) : (
//               <></>
//             )}

//             {/* <div className={"text-sm"}> {item.description}</div> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
