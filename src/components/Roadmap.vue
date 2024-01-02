<template>
    <div id="roadmap" class="text-white">
        <h1 class="text-5xl font-bold py-4">Progress</h1>
        <el-timeline>
            
            <el-timeline-item timestamp="Future - 2024" placement="top">
                <TimelineCard 
                header="More Data Structures and Algorithims" 
                log="Implementing hashtables, trees, and linked lists" 
                date="2023"/>
            </el-timeline-item>
            
            <el-timeline-item timestamp="Future - 2024" placement="top">
                <TimelineCard 
                header="Code Breakdown " 
                log="The code breakdown will involve two main events taking place. A step by step proccess of the algorithim/data structure to review with the code as well
                and a general explaination of the code analysis general statistical analysis like time and space compelexity. Making general averages and graphing out more statistical data for my 
                stat nerds 
                " 
                date="2023"/>
            
            </el-timeline-item>

            <el-timeline-item timestamp="Future - 2024" placement="top">
                <TimelineCard 
                header="Statistical Analysis " 
                log="
                Need too add info here, but will generally be graphs and avergages of the data down and generated  
                " 
                date="2023"/>
            
            </el-timeline-item>

            <el-timeline-item timestamp="Current Update - 2023" color="#34FF33" placement="top">
                <TimelineCard 
                header="User Interface Changes" 
                log="Most of the changes involved for the year of 2023 was primarily UI/UX redesign. During this year I prioritized in my outside 
                    and personal life in accounting for user experience and that involves making a modern user interface for the general user. 
                    Understanding my primary viewer audience was my first objective" 
                date="2023"/>
            
            </el-timeline-item>
            <el-timeline-item timestamp="2022" placement="top">
                <TimelineCard 
                header="Beginning" 
                log="Main objective in the beginning was establishing the objective and purpose of this website. I wanted this to first focus on being a showcase website and then I wanted to focus on it being 
                    primarily a website that people could interact and learn from as well. I showed this to peers of mine for their review and how to make it better to the point it helping other people computer science and 
                    making the proccess a lot easier. 
                " 
                date="2023"/>
            </el-timeline-item>

        </el-timeline>
    </div>
</template>

<script setup lang="ts">
import TimelineCard from './TimelineCard.vue';
</script>

<style>
.buttonAnimation:hover {
  animation-name: up-movement;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  box-shadow: 0 0 50px 15px #48abe0;

  @apply text-green-300 shadow-lg bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F];
}
</style>