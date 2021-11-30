<template>
    <div :key="task.id" class="task">
        <div class="task-item">
            <div class="circle"></div>
            {{task.title}}            
            </div>
        <img :src="deleteSvg" />
    </div>
</template>

<script>
import deleteSvg from "@/assets/delete.svg";
import {mapState} from 'vuex'
    export default {
        props: {
            task: {
                type: Object,
                required: true
            }
        },
        setup() {
            return {
                deleteSvg
            };
        },
        computed: {
            ...mapState({
                
            })
        }
    }
</script>

<style lang="scss" scoped>
.task {
    display: flex;
    justify-content: space-between;
    &-item {
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        &.circle {
            width: 20px;
            height: 20px;
            border: 2px solid #E8E8E8;
            margin-right: 15px;
            &:hover {
                background: #F2F2F2;
                border: 2px solid #F2F2F2;
                &::before {
                    content: ' ';
                }
            }
        }
    }
    &img {
        cursor: pointer;
        width: 11px;
        height: 11px;
    }
    
}
</style>