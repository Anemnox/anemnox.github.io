import * as d3 from 'd3';

const pieData = [
    { label: 'Web', value: 8, name: "Web Development",
        desc: "Javascript was the second language that I learned alongside html and css back in 2013. I started out building short interactive webpages such as concentration and clicker games (this was the era of Cookie Clicker). In undergrad, I took lead in developing a full-stack application for handling communication between the surface station and a remotely operated vehicle, which used React.js for the front-end. I have also used Leaflet.js and Turf.js to add dynamic maps into websites, and used Three.js to as a base for a javascript based physics engine."
    },
    { label: 'Python', value: 5, name: "Python",
        desc: "Python is my primary language for data processing, analysis and machine learning. I have experience with distributed training on AWS SageMaker, where I utilized the smdistributed module to benchmark and evaluate various GPU hardware and pricing configurations for performance and cost-efficiency. Other projects span from image-based neural network models to contributions for DARPA's Forecasting Floats in Turbulence initiative."
    },
    { label: 'Java', value: 5, name: "Java",
        desc: "I have experience developing Android applications using Java and the Android SDK, with a solid understanding of the Android activity lifecycle and custom rendering via SurfaceView and View components. As part of an Android game project, I designed and integrated a custom 2D physics engine to simulate real-time object interactions. Additionally, Java has been a core language in academic settings, where I applied object-oriented design principles and implemented a range of algorithmic solutions across coursework and team projects."
    },
    { label: 'Dart', value: 1, name: "Dart",
        desc: "I have used Dart with Flutter to develop cross-platform applications in collaboration with the bioinformatics team at the University of Washington Tacoma. One key project involved building a launcher application that manages Docker containers and dependencies for the Biodepot Workflow Builder (Bwb), enabling streamlined workflow execution. Additionally, I developed a mobile application that triggers a data-processing pipeline for analyzing gene fusions from FASTQ/FAST5 files, presenting the results through an intuitive and accessible UI."
    },
];

function replaceText(idx) {
    const titleComponent = document.getElementById("tech-title");
    const subtitlecomponent = document.getElementById("tech-subtitle");
    const descComponent = document.getElementById("tech-desc");
    

    titleComponent.innerText = pieData[idx].name;
    subtitlecomponent.innerText = "Years of experience: " + pieData[idx].value;
    descComponent.innerText = pieData[idx].desc;

}

function drawInteractivePieChart(containerSelector, data) {
    const width = 600;
    const height = 600;
    const radius = Math.min(width - 30, height - 30) / 2;

    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.label))
        .range(d3.schemeTableau10);

    const pie = d3.pie().value(d => d.value);
    const arcData = pie(data);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);
    const arcHover = d3.arc().innerRadius(0).outerRadius(radius + 10);

    const svg = d3.select(containerSelector)
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .classed('w-full h-auto', true)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background', 'rgba(0,0,0,0.7)')
        .style('color', '#fff')
        .style('padding', '4px 8px')
        .style('border-radius', '4px')
        .style('pointer-events', 'none')
        .style('opacity', 0);
    
    svg.selectAll('path')
        .data(arcData)
        .join('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.label))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .on('mouseover', function (event, d) {
            d3.select(this).transition().duration(200).attr('d', arcHover);
            tooltip.style('opacity', 1)
                .html(`<strong>${d.data.label}</strong>: ${d.data.value} Year${d.data.value > 1 ? "s" : ""}`);
        })
        .on('mousemove', function (event) {
            tooltip.style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function () {
            d3.select(this).transition().duration(200).attr('d', arc);
            tooltip.style('opacity', 0);
        })
        .on('click', function (event, d) {
            replaceText(d.index);
        });

    svg.selectAll('text')
        .data(arcData)
        .join('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('fill', 'white')
        .style('font-size', '2em')
        .style('pointer-events', 'none')
        .text(d => d.data.label);
}

export function initPieChart() {
    drawInteractivePieChart('#chart', pieData);
}