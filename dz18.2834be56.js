function t(t){e.innerHTML=t.map(t=>`<tr>
          <th>${t.id}</th>
          <th>${t.name}</th>
          <th>${t.age}</th>
          <th>${t.course}</th>
          <th>${t.skills}</th>
          <th>${t.email}</th>
          <th>${t.isEnrolled}</th>
          <th>
            <button class="edit" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <button class="delete" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
          </th>
        </tr>
      `).join("")}const e=document.querySelector("#students-table"),n=document.getElementById("get-students-btn"),d=document.getElementById("add-student-form"),l=document.getElementById("name"),u=document.getElementById("age"),s=document.getElementById("course"),a=document.getElementById("skills"),o=document.getElementById("email"),i=document.getElementById("isEnrolled");function c(){fetch("http://localhost:3000/students").then(t=>t.json()).then(t)}n.addEventListener("click",c),d.addEventListener("submit",t=>{fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify({name:l.value.trim(),age:u.value,course:s.value.trim(),skill:a.value,email:o.value.trim(),isEnrolled:i.checked})}).then(()=>{d.reset(),c()})}),e.addEventListener("click",t=>{var e,n;t.target.classList.contains("delete")?(e=t.target.dataset.id,fetch(`http://localhost:3000/students/${e}`,{method:"DELETE"})).then(()=>c()):t.target.classList.contains("edit")&&(n=t.target.dataset.id,fetch(`http://localhost:3000/students/${n}`).then(t=>t.json()).then(({name:t,age:e,course:n,skill:d,email:c,isEnrolled:h})=>{l.value=t,u.value=e,s.value=n,a.value=d,o.value=c,i.checked=h}))});
//# sourceMappingURL=dz18.2834be56.js.map
