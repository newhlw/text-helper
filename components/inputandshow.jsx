import React from "react";

function Inputandshow() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 order-1 order-md-2">
          <h4 class="mb-3">Enter or Paste Your Text</h4>
          <textarea
            class="form-control input-box"
            placeholder="Type here..."
          ></textarea>
        </div>

        <div class="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
          <div class="stats-box">
            <h4>Statistics</h4>
            <p>
              Words: <strong>0</strong>
            </p>
            <p>
              Characters: <strong>0</strong>
            </p>
            <p>
              Sentences: <strong>0</strong>
            </p>
            <p>
              Paragraphs: <strong>0</strong>
            </p>
            <hr />
            <p>
              Reading Time: <strong>0 min</strong>
            </p>
            <p>
              Grade Level: <strong>-</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputandshow;
