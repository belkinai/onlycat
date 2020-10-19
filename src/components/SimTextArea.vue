<template>
    <div class="sim-text-area">
        <div class="sim-text-area__wrap" :class="{focus: focus}">
            <textarea :id="uuid" rows="16"
                      class="sim-text-area__input"
                      @input="$emit('update:modelValue', $event.target.value)"
                      @focusIn="focus = true"
                      @focusOut="focus = false"/>
            <label :for="uuid" class="sim-text-area__label"
                   :class="{focus: labelFocus}"
                   :style="{color: labelColor}"
            >
                {{ label }}
            </label>
            <div class="sim-text-area__underline"></div>
            <div class="sim-text-area__underline_focus" :style="{background: color}"></div>
        </div>
    </div>
</template>

<script>
    import Uuid from '@/mixins/uuid';
    export default {
        props: {
            modelValue: String,
            color:      String,
            label:      String,
        },
        mixins: [Uuid],
        data() {
            return {
                uuid: null,
                focus: false,
            };
        },
        computed: {
            labelFocus() {
                return (this.focus || this.modelValue);
            },
            labelColor() {
                return this.labelFocus ? this.color : '';
            }
        }
    }
</script>

<style>
    .sim-text-area {
        flex-grow: 1;
        padding-top: 8px;
        margin: 20px 0;
    }
    .sim-text-area__wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 8px 0 0;
        background: transparent;
        transition: all .2s;
    }
    .sim-text-area__underline {
        position: absolute;
        bottom: 0;
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        background: #605c79;
    }
    .sim-text-area__underline_focus {
        position: absolute;
        bottom: 0;
        display: block;
        content: '';
        width: 0;
        height: 2px;
        background: #5116dd;
        transition: all .3s;
    }
    .sim-text-area__wrap.focus .sim-text-area__underline_focus {
        width: 100%;
    }
    .sim-text-area__input {
        width: 100%;
        min-width: 100%;
        height: 100%;
        padding: 0;
        outline: none;
        border: none;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.87);
        background: transparent;
    }
    .sim-text-area__label {
        position: absolute;
        left: 0;
        top: 11px;
        transition: all .2s;
        color: #aaa;
        cursor: text;
    }
    .sim-text-area__label.focus {
        top: -8px;
        left: 0;
        font-size: 12px;
        cursor: default;
    }
</style>
