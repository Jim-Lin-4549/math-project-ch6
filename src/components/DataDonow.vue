<script setup lang="ts">
    import { ref } from "vue";
    import { VueUiVerticalBar } from "vue-data-ui";
    import "vue-data-ui/style.css";
    
    const config = ref({
        "responsive": false,
        "theme": "",
        "customPalette": [],
        "useCssAnimation": true,
        "style": {
            "fontFamily": "inherit",
            "chart": {
                "backgroundColor": "#ffffff00",
                "color": "#ffffffff",
                "layout": {
                    "bars": {
                        "sort": "desc",
                        "useStroke": true,
                        "strokeWidth": 2,
                        "height": 36,
                        "gap": 6,
                        "borderRadius": 6,
                        "offsetX": 64,
                        "paddingRight": 0,
                        "useGradient": true,
                        "gradientIntensity": "0",
                        "fillOpacity": "100",
                        "underlayerColor": "rgba(255, 255, 255, 0)",
                        "dataLabels": {
                            "color": "#ffe3d6ff",
                            "bold": true,
                            "fontSize": 16,
                            "value": {
                                "show": true,
                                "roundingValue": 0,
                                "prefix": "",
                                "suffix": "",
                                "formatter": null
                            },
                            "percentage": {
                                "show": true,
                                "roundingPercentage": 0
                            },
                            "offsetX": 8
                        },
                        "nameLabels": {
                            "show": true,
                            "color": "#ffffffff",
                            "bold": false,
                            "fontSize": 17,
                            "offsetX": -8
                        },
                        "parentLabels": {
                            "show": true,
                            "color": "#ffffff00",
                            "bold": false,
                            "fontSize": 10,
                            "offsetX": 0
                        }
                    },
                    "highlighter": {
                        "color": "#1A1A1Aff",
                        "opacity": 5
                    },
                    "separators": {
                        "show": false,
                        "color": "#e1e5e8ff",
                        "strokeWidth": 1
                    }
                },
                "title": {
                    "text": "Sports We Do",
                    "color": "#ffffffff",
                    "fontSize": 20,
                    "bold": true,
                    "textAlign": "center",
                    "paddingLeft": 0,
                    "paddingRight": 0,
                    "subtitle": {
                        "color": "#A1A1A1ff",
                        "text": "",
                        "fontSize": 16,
                        "bold": false
                    }
                },
                "legend": {
                    "show": false,
                    "bold": false,
                    "backgroundColor": "#ffffff00",
                    "color": "#8ac3ffff",
                    "fontSize": 14,
                    "position": "top",
                    "roundingValue": 0,
                    "roundingPercentage": 0,
                    "prefix": "",
                    "suffix": ""
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
                    "offsetY": 24,
                    "showValue": true,
                    "showPercentage": true,
                    "roundingValue": 0,
                    "roundingPercentage": 0,
                    "prefix": "",
                    "suffix": ""
                }
            }
        },
        "userOptions": {
            "show": true,
            "position": "right",
            "buttons": {
                "tooltip": false,
                "pdf": false,
                "csv": false,
                "img": false,
                "table": false,
                "labels": false,
                "fullscreen": false,
                "sort": false,
                "stack": false,
                "animation": false,
                "annotator": false
            },
            "buttonTitles": {
                "open": "Open options",
                "close": "Close options",
                "tooltip": "Toggle tooltip",
                "pdf": "Download PDF",
                "csv": "Download CSV",
                "img": "Download PNG",
                "table": "Toggle table",
                "fullscreen": "Toggle fullscreen",
                "sort": "Toggle sort",
                "annotator": "Toggle annotator"
            }
        },
        "table": {
            "show": false,
            "responsiveBreakpoint": 400,
            "th": {
                "backgroundColor": "#FFFFFFff",
                "color": "#1A1A1Aff",
                "outline": "none"
            },
            "td": {
                "backgroundColor": "#FFFFFFff",
                "color": "#1A1A1Aff",
                "outline": "none",
                "roundingValue": 0,
                "roundingPercentage": 0,
                "prefix": "",
                "suffix": ""
            }
        },
        "translations": {
            "parentName": "Group",
            "childName": "Serie",
            "value": "Value",
            "percentageToTotal": "% / total",
            "percentageToSerie": "% / group"
        }
    });
    
    
    const dataset = ref([
        {
            "name": "Table Tennis",
            "value": 4,
            "color": "#32d23d",
            "children": []
        },
        {
            "name": "Badminton",
            "value": 17,
            "color": "#64a5dd",
            "children": []
        },
        {
            "name": "Basketball",
            "value": 7,
            "color": "#ff6400",
            "children": []
        },
        {
            "name": "Running",
            "value": 8,
            "color": "#d24143",
            "children": []
        },
        {
            "name": "Swimming",
            "value": 5,
            "color": "#d241ac",
            "children": []
        },
        {
            "name": "Don't Play Any Sports",
            "value": 8,
            "color": "#4159d2",
            "children": []
        },
        {
            "name": "Other Sports",
            "value": 9,
            "color": "#a0d241",
            "children": []
        },
        {
            "name": "Football",
            "value": 5,
            "color": "#42d392",
            "children": []
        }
    ]);

</script>

<template>
    <a-card :style="{paddingRight: '16px'}">
        <div>
            <VueUiVerticalBar :config="config" :dataset="dataset" />
        </div>
    </a-card>
</template>

