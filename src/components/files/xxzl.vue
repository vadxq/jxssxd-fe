<template>
  <section>
    <b-container class="files-container">
      <div class="item">
        <span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVEhL7ZYxDkBAEEX3Bq7gHOI6NGqhUTulqFwDfySbLDuENUszL3nFNv+Vs0ZRvqKCE1wuHGEKxcjhDLnYUdF4DbnImRRvblrCBLK0kAtIOUA2HjtMFtDDDUtjd/vtdUDDkmh4h4Yl0fCO38LuWeRO2xvtbgc9nnwEQqTtDLLc+fqESJu0rSixMWYFDF7P1diFKj4AAAAASUVORK5CYII=">
          <span> 培训班学习资料</span>
        </span>
        <router-link to="/files/sxdwj">></router-link>
      </div>
      <div @click="postCid(item)" :key=item.id class="item" v-b-modal.modal-scrollable v-for="item in xxzlList" :cid="item.id">
        {{item.title}}
      </div>
    </b-container>
    <b-modal id="modal-scrollable" scrollable :title="title" ok-only ok-title="阅读完毕">
      {{content}}
    </b-modal>
  </section>
</template>
