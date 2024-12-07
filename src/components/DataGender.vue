<script setup lang="ts">
    import { ref } from "vue";
    import { VueUiSparkStackbar } from "vue-data-ui";
    
    const config = ref({
        "theme": "",
        "customPalette": [],
        "style": {
            "fontFamily": "inherit",
            "backgroundColor": "#ffffff00",
            "animation": {
                "show": true,
                "animationFrames": 60
            },
            "bar": {
                "gradient": {
                    "show": true,
                    "intensity": 40,
                    "underlayerColor": "#FFFFFF"
                }
            },
            "legend": {
                "show": true,
                "textAlign": "left",
                "fontSize": 12,
                "margin": "6px 0 0 0",
                "name": {
                    "color": "#dbe1ffff",
                    "bold": false
                },
                "value": {
                    "show": true,
                    "bold": false,
                    "color": "#ffe3d6ff",
                    "prefix": "",
                    "suffix": "",
                    "rounding": 0,
                    "formatter": null
                },
                "percentage": {
                    "show": true,
                    "bold": true,
                    "color": "#ffe3d6ff",
                    "rounding": 1
                }
            },
            "title": {
                "text": "Gender",
                "color": "#ffffffff",
                "fontSize": 20,
                "bold": false,
                "textAlign": "left",
                "paddingLeft": 0,
                "paddingRight": 0,
                "subtitle": {
                    "color": "#A1A1A1ff",
                    "text": "",
                    "fontSize": 12,
                    "bold": false
                },
                "margin": "0 0 6px 0"
            },
            "tooltip": {
                "show": true,
                "color": "#1A1A1Aff",
                "backgroundColor": "#FFFFFFff",
                "fontSize": 14,
                "customFormat": null,
                "borderRadius": 4,
                "borderColor": "#e1e5e8",
                "borderWidth": 1,
                "backgroundOpacity": 30,
                "position": "center",
                "offsetY": 24
            }
        }
    });
    
    
    const dataset = ref([
        {
            "name": "Boy",
            "value": 24,
            "color": "#008bd1"
        },
        {
            "name": "Girl",
            "value": 21,
            "color": "#e6007a"
        }
    ]);

</script>

<template>
    <a-card :style="{ height: '100%' }" hoverable>
        <VueUiSparkStackbar :config="config" :dataset="dataset" />
    </a-card>
</template>

