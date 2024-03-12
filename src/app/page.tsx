// import Profile from "../components/profile";

// export default function Home() {
//   return (
//     <>
//     <center><p>Ilmuwan hebat</p></center>
//       <div className="columns-3">
        
//       <Profile />
//       <Profile />
//       <Profile />
//       </div>
//     </>
    
//   );
// }

// import { Gallery } from "@/components/gallery";

// export default function Bio() {
//   return (
//     <div className="intro">
//       <h1>Selamat datang di website zipitndi!</h1>
//       <p className="summary">
//         Anda dapat membaca uneg-uneg saya di sini.
//         <br/><br/>
//         <b>Juga ada <i>foto</i> ilmuan!</b>
//         <Gallery />
//       </p>
//     </div>
//   );
// }

import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
  );
}
